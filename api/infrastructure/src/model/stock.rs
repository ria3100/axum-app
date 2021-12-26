use chrono::{DateTime, Local};
use domain::model::stock::{NewStock, Stock};
use sqlx::FromRow;

#[derive(FromRow)]
pub struct StockTable {
    pub id: String,
    pub name: String,
    pub created_at: DateTime<Local>,
    pub updated_at: DateTime<Local>,
}

impl TryFrom<StockTable> for Stock {
    type Error = anyhow::Error;
    fn try_from(st: StockTable) -> Result<Self, Self::Error> {
        Ok(Stock::new(
            st.id.try_into()?,
            st.name,
            st.created_at,
            st.updated_at,
        ))
    }
}

impl TryFrom<NewStock> for StockTable {
    type Error = anyhow::Error;
    fn try_from(s: NewStock) -> Result<Self, Self::Error> {
        Ok(StockTable {
            id: s.id.value.to_string(),
            name: s.name,
            created_at: Local::now(),
            updated_at: Local::now(),
        })
    }
}
