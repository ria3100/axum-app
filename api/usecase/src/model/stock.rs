use derive_new::new;
use domain::model::{stock::NewStock, Id};

#[derive(new)]
pub struct CreateStock {
    pub name: String,
}

impl TryFrom<CreateStock> for NewStock {
    type Error = anyhow::Error;

    fn try_from(c: CreateStock) -> anyhow::Result<Self> {
        let stock_id = Id::gen();
        Ok(NewStock::new(stock_id, c.name))
    }
}
