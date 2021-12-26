use std::sync::Arc;

use infrastructure::{
    modules::{RepositoriesModule, RepositoriesModuleExt},
    persistence::postgres::Db,
    repository::health_check::HealthCheckRepository,
};
use usecase::usecase::{health_check::HealthCheckUseCase, stock::StockUseCase};

pub struct Modules {
    health_check_use_case: HealthCheckUseCase,
    stock_use_case: StockUseCase<RepositoriesModule>,
}

pub trait ModulesExt {
    type RepositoriesModule: RepositoriesModuleExt;

    fn health_check_use_case(&self) -> &HealthCheckUseCase;
    fn stock_use_case(&self) -> &StockUseCase<Self::RepositoriesModule>;
}

impl ModulesExt for Modules {
    type RepositoriesModule = RepositoriesModule;

    fn health_check_use_case(&self) -> &HealthCheckUseCase {
        &self.health_check_use_case
    }

    fn stock_use_case(&self) -> &StockUseCase<Self::RepositoriesModule> {
        &self.stock_use_case
    }
}

impl Modules {
    pub async fn new() -> Modules {
        let db = Db::new().await;

        let repositories_module = Arc::new(RepositoriesModule::new(db.clone()));

        let health_check_use_case = HealthCheckUseCase::new(HealthCheckRepository::new(db));
        let stock_use_case = StockUseCase::new(repositories_module.clone());

        Self {
            health_check_use_case,
            stock_use_case,
        }
    }
}
