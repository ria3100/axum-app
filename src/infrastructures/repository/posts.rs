use crate::domains::posts::{Post, PostId, PostRepository};
use crate::infrastructures::db::schema::*;
use crate::server::AppContext;
use diesel;
use diesel::prelude::*;
use diesel::QueryDsl;
use diesel::{
    r2d2::{ConnectionManager, Pool},
    PgConnection,
};
use failure::Error;

//
// Entity
//

#[derive(Debug, Clone, Eq, PartialEq, Hash, Insertable)]
#[table_name = "posts"]
pub struct NewPostEntity {
    pub title: String,
    pub body: String,
}

impl NewPostEntity {
    fn from(model: &Post) -> NewPostEntity {
        NewPostEntity {
            title: model.title.to_owned(),
            body: model.body.to_owned(),
        }
    }
}

#[derive(Debug, Clone, Eq, PartialEq, Hash, Queryable, Identifiable, AsChangeset)]
#[table_name = "posts"]
pub struct PostEntity {
    pub id: u64,
    pub title: String,
    pub body: String,
    // pub published: bool,
}

impl PostEntity {
    fn from(model: &Post) -> PostEntity {
        PostEntity {
            id: model.id.get(),
            title: model.title.to_owned(),
            body: model.body.to_owned(),
            // published: model.published,
        }
    }

    fn of(&self) -> Post {
        Post {
            id: PostId::new(self.id),
            title: self.title.to_owned(),
            body: self.body.to_owned(),
            // published: false,
        }
    }
}

pub struct PostRepositoryImpl {
    pub pool: Box<Pool<ConnectionManager<PgConnection>>>,
}

impl PostRepository for PostRepositoryImpl {
    // fn find_by_id(
    //     post_id: PostId,
    //     pool: Pool<ConnectionManager<PgConnection>>,
    // ) -> Result<Post, Error> {
    //     use super::super::db::schema::posts::dsl;

    //     let conn = pool.get()?;
    //     let entity: PostEntity = dsl::posts
    //         .filter(posts::id.eq(post_id.get()))
    //         .get_result(&conn)?;

    //     Ok(entity.of())
    // }

    // fn list(pool: Pool<ConnectionManager<PgConnection>>) -> Result<Vec<Post>, Error> {
    //     use super::super::db::schema::posts::dsl;

    //     let conn = pool.get()?;
    //     let query = dsl::posts.into_boxed();
    //     let results: Vec<PostEntity> = query.limit(100).load(&conn)?;

    //     Ok(results.into_iter().map(|e| e.of()).collect())
    // }

    fn insert(app_context: AppContext, post: &Post) -> Result<(), Error> {
        use super::super::db::schema::posts::dsl;

        let conn = app_context.pool.get()?;
        let entity = NewPostEntity::from(post);
        diesel::insert_into(dsl::posts)
            .values(entity)
            .execute(&conn)?;

        Ok(())
    }

    fn update(app_context: AppContext, post: &Post) -> Result<(), Error> {
        let conn = app_context.pool.get()?;
        let entity = PostEntity::from(post);
        diesel::update(posts::table).set(&entity).execute(&conn)?;

        Ok(())
    }

    // fn delete(post: &Post, pool: Pool<ConnectionManager<PgConnection>>) -> Result<(), Error> {
    //     let conn = pool.get()?;
    //     let entity = PostEntity::from(post);
    //     diesel::delete(&entity).execute(&conn)?;

    //     Ok(())
    // }
}
