use std::sync::Arc;

use derive_new::new;
use domain::repository::stock::StockRepository;
use infrastructure::modules::RepositoriesModuleExt;

use crate::model::stock::CreateStock;

#[derive(new)]
pub struct StockUseCase<R: RepositoriesModuleExt> {
    repositories: Arc<R>,
}

impl<R: RepositoriesModuleExt> StockUseCase<R> {
    pub async fn register_stock(&self, source: CreateStock) -> anyhow::Result<()> {
        self.repositories
            .stock_repository()
            .insert(source.try_into()?)
            .await
    }
}
