use domain::model::stock::Stock;

pub struct StockView {
    pub id: String,
    pub name: String,
}

impl StockView {
    pub fn new(stock: Stock) -> Self {
        Self {
            id: stock.id.value.to_string(),
            name: stock.name,
        }
    }
}
