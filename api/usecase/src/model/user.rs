use derive_new::new;
use domain::model::user::NewUser;

#[derive(new)]
pub struct CreateUser {
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

impl TryFrom<CreateUser> for NewUser {
    type Error = anyhow::Error;

    fn try_from(c: CreateUser) -> anyhow::Result<Self> {
        Ok(NewUser::new(
            c.uid,
            c.screen_name,
            c.name,
            c.belongs,
            c.job,
            c.bio,
            c.icon_image_url,
            c.cover_image_url,
            c.twitter_username,
            c.github_username,
            c.website_url,
        ))
    }
}
