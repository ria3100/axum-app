use serde::Deserialize;
use usecase::model::stock::CreateStock;
use validator::Validate;

#[derive(Deserialize, Debug, Validate)]
pub struct JsonCreateStock {
    #[validate(length(min = 1, max = 255))]
    name: String,
}

impl From<JsonCreateStock> for CreateStock {
    fn from(s: JsonCreateStock) -> Self {
        CreateStock { name: s.name }
    }
}
