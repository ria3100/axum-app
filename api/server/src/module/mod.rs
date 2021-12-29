use std::sync::Arc;

use infrastructure::{
    modules::{RepositoriesModule, RepositoriesModuleExt},
    persistence::postgres::Db,
    repository::health_check::HealthCheckRepository,
};
use usecase::usecase::{health_check::HealthCheckUseCase, user::UserUseCase};

pub struct Modules {
    health_check_use_case: HealthCheckUseCase,
    user_use_case: UserUseCase<RepositoriesModule>,
}

pub trait ModulesExt {
    type RepositoriesModule: RepositoriesModuleExt;

    fn health_check_use_case(&self) -> &HealthCheckUseCase;
    fn user_use_case(&self) -> &UserUseCase<Self::RepositoriesModule>;
}

impl ModulesExt for Modules {
    type RepositoriesModule = RepositoriesModule;

    fn health_check_use_case(&self) -> &HealthCheckUseCase {
        &self.health_check_use_case
    }

    fn user_use_case(&self) -> &UserUseCase<Self::RepositoriesModule> {
        &self.user_use_case
    }
}

impl Modules {
    pub async fn new() -> Modules {
        let db = Db::new().await;

        let repositories_module = Arc::new(RepositoriesModule::new(db.clone()));

        let health_check_use_case = HealthCheckUseCase::new(HealthCheckRepository::new(db));
        let user_use_case = UserUseCase::new(repositories_module.clone());

        Self {
            health_check_use_case,
            user_use_case,
        }
    }
}
