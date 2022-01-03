use std::sync::Arc;

use derive_new::new;
use domain::repository::user::UserRepository;
use infrastructure::modules::RepositoriesModuleExt;

use crate::model::{user::CreateUser, user_view::UserView};

#[derive(new)]
pub struct UserUseCase<R: RepositoriesModuleExt> {
    repositories: Arc<R>,
}

impl<R: RepositoriesModuleExt> UserUseCase<R> {
    pub async fn find(&self, uid: String) -> anyhow::Result<Option<UserView>> {
        self.repositories
            .user_repository()
            .find(&uid.try_into()?)
            .await
            .map(|item| item.map(|user| UserView::new(user.into())))
    }

    pub async fn find_by_screen_name(
        &self,
        screen_name: String,
    ) -> anyhow::Result<Option<UserView>> {
        self.repositories
            .user_repository()
            .find_by_screen_name(&screen_name.try_into()?)
            .await
            .map(|item| item.map(|user| UserView::new(user.into())))
    }

    pub async fn create_user(&self, source: CreateUser) -> anyhow::Result<()> {
        self.repositories
            .user_repository()
            .insert(source.try_into()?)
            .await
    }
}
