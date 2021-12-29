use chrono::{DateTime, Local};
use domain::model::user::{NewUser, User};
use sqlx::FromRow;

#[derive(FromRow)]
pub struct UserTable {
    pub uid: String,
    pub screen_name: String,
    pub name: String,
    pub belongs: String,
    pub job: String,
    pub bio: String,
    pub icon_image_url: String,
    pub cover_image_url: String,
    pub twitter_username: String,
    pub github_username: String,
    pub website_url: String,
    pub created_at: DateTime<Local>,
    pub updated_at: DateTime<Local>,
}

impl TryFrom<UserTable> for User {
    type Error = anyhow::Error;
    fn try_from(st: UserTable) -> Result<Self, Self::Error> {
        Ok(User::new(
            st.uid.try_into()?,
            st.screen_name,
            st.name,
            st.belongs,
            st.job,
            st.bio,
            st.icon_image_url,
            st.cover_image_url,
            st.twitter_username,
            st.github_username,
            st.website_url,
            st.created_at,
            st.updated_at,
        ))
    }
}

impl TryFrom<NewUser> for UserTable {
    type Error = anyhow::Error;
    fn try_from(s: NewUser) -> Result<Self, Self::Error> {
        Ok(UserTable {
            uid: s.uid.value.to_string(),
            screen_name: s.screen_name,
            name: s.name,
            belongs: s.belongs,
            job: s.job,
            bio: s.bio,
            icon_image_url: s.icon_image_url,
            cover_image_url: s.cover_image_url,
            twitter_username: s.twitter_username,
            github_username: s.github_username,
            website_url: s.website_url,
            created_at: Local::now(),
            updated_at: Local::now(),
        })
    }
}
