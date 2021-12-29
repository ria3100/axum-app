use domain::model::user::User;

pub struct UserView {
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

impl UserView {
    pub fn new(user: User) -> Self {
        Self {
            uid: user.uid.value.to_string(),
            screen_name: user.screen_name,
            name: user.name,
            belongs: user.belongs,
            job: user.job,
            bio: user.bio,
            icon_image_url: user.icon_image_url,
            cover_image_url: user.cover_image_url,
            twitter_username: user.twitter_username,
            github_username: user.github_username,
            website_url: user.website_url,
        }
    }
}
