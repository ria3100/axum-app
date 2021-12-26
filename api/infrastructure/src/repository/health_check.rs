use anyhow::anyhow;
use std::sync::Arc;

use crate::persistence::postgres::Db;

pub struct HealthCheckRepository {
    db: Arc<Db>,
}

impl HealthCheckRepository {
    pub fn new(db: Db) -> Self {
        Self { db: Arc::new(db) }
    }

    pub async fn check_rds_conn(&self) -> anyhow::Result<()> {
        let pool = self.db.0.clone();
        let attempt = pool
            .try_acquire()
            .map(|_| ())
            .ok_or(anyhow!("Failed to connect database."));
        attempt
    }
}
