use domain::{model::stock::Stock, repository::stock::StockRepository};

use crate::{persistence::postgres::Db, repository::DatabaseRepositoryImpl};

pub struct RepositoriesModule {
    stock_repository: DatabaseRepositoryImpl<Stock>,
}

pub trait RepositoriesModuleExt {
    type StockRepo: StockRepository;
    fn stock_repository(&self) -> &Self::StockRepo;
}

impl RepositoriesModuleExt for RepositoriesModule {
    type StockRepo = DatabaseRepositoryImpl<Stock>;

    fn stock_repository(&self) -> &Self::StockRepo {
        &self.stock_repository
    }
}

impl RepositoriesModule {
    pub fn new(db: Db) -> Self {
        let stock_repository = DatabaseRepositoryImpl::new(db.clone());
        Self { stock_repository }
    }
}
