use chrono::{DateTime, Local};
use derive_new::new;

use super::Id;

#[derive(new, Debug)]
pub struct User {
    pub uid: Id<User>,
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

#[derive(new, Debug)]
pub struct NewUser {
    pub uid: Id<User>,
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
}
