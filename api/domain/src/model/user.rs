use derive_new::new;

#[derive(new, Debug)]
pub struct User {
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
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}

#[derive(new, Debug)]
pub struct NewUser {
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
}
