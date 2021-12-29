use async_trait::async_trait;
use domain::{
    model::{
        user::{NewUser, User},
        Id,
    },
    repository::user::UserRepository,
};
use sqlx::query_as;

use crate::model::user::UserTable;

use super::DatabaseRepositoryImpl;

#[async_trait]
impl UserRepository for DatabaseRepositoryImpl<User> {
    async fn find(&self, uid: &Id<User>) -> anyhow::Result<Option<User>> {
        let pool = self.pool.0.clone();
        let user_table = query_as::<_, UserTable>("select * from users where uid = ?")
            .bind(uid.value.to_string())
            .fetch_one(&*pool)
            .await
            .ok();
        match user_table {
            Some(st) => Ok(Some(st.try_into()?)),
            None => Ok(None),
        }
    }

    async fn insert(&self, source: NewUser) -> anyhow::Result<()> {
        let pool = self.pool.0.clone();
        let user_table: UserTable = source.try_into()?;
        let _ = sqlx::query(
            "insert into users (uid, screen_name, name, belongs, job, bio, icon_image_url, cover_image_url, twitter_username, github_username, website_url, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        )
        .bind(user_table.uid)
        .bind(user_table.screen_name)
        .bind(user_table.name)
        .bind(user_table.belongs)
        .bind(user_table.job)
        .bind(user_table.bio)
        .bind(user_table.icon_image_url)
        .bind(user_table.cover_image_url)
        .bind(user_table.twitter_username)
        .bind(user_table.github_username)
        .bind(user_table.website_url)
        .bind(user_table.created_at)
        .bind(user_table.updated_at)
        .execute(&*pool)
        .await?;
        Ok(())
    }
}

#[cfg(test)]
mod test {
    use domain::model::user::NewUser;
    use domain::model::Id;
    use domain::repository::user::UserRepository;
    use ulid::Ulid;

    use crate::persistence::postgres::Db;

    use super::DatabaseRepositoryImpl;

    // TODO later fix
    #[ignore]
    #[tokio::test]
    async fn test_insert_user() {
        let db = Db::new().await;
        let repository = DatabaseRepositoryImpl::new(db);
        let uid = Ulid::new();
        let _ = repository
            .insert(NewUser::new(
                Id::new(uid),
                "ria".to_string(),
                "ria".to_string(),
                "tricot".to_string(),
                "web engineer".to_string(),
                "Interested in rust".to_string(),
                "icon.png".to_string(),
                "cover.png".to_string(),
                "@_Ria0130".to_string(),
                "ria3100".to_string(),
                "https://ria0130.dev".to_string(),
            ))
            .await
            .unwrap();
        let found = repository.find(&Id::new(uid)).await.unwrap().unwrap();
        assert_eq!(found.uid.value, uid);
    }
}
