use serde::Deserialize;
use usecase::model::user::CreateUser;
use validator::Validate;

#[derive(Deserialize, Debug, Validate)]
pub struct JsonCreateUser {
    #[validate(length(min = 1, max = 255))]
    screen_name: String,
    #[validate(length(min = 1, max = 255))]
    name: String,
    #[validate(length(min = 1, max = 255))]
    belongs: String,
    #[validate(length(min = 1, max = 255))]
    job: String,
    #[validate(length(min = 1, max = 255))]
    bio: String,
    #[validate(length(min = 1, max = 255))]
    icon_image_url: String,
    #[validate(length(min = 1, max = 255))]
    cover_image_url: String,
    #[validate(length(min = 1, max = 255))]
    twitter_username: String,
    #[validate(length(min = 1, max = 255))]
    github_username: String,
    #[validate(length(min = 1, max = 255))]
    website_url: String,
}

impl From<JsonCreateUser> for CreateUser {
    fn from(s: JsonCreateUser) -> Self {
        CreateUser {
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
        }
    }
}
