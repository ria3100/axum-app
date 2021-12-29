use serde::Serialize;
use usecase::model::user_view::UserView;

#[derive(Serialize)]
pub struct JsonUserView {
    uid: String,
    screen_name: String,
    name: String,
    belongs: String,
    job: String,
    bio: String,
    icon_image_url: String,
    cover_image_url: String,
    twitter_username: String,
    github_username: String,
    website_url: String,
}

impl From<UserView> for JsonUserView {
    fn from(s: UserView) -> Self {
        JsonUserView {
            uid: s.uid,
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
