use chrono::{DateTime, Local};
use derive_new::new;

use super::Id;

#[derive(new, Debug)]
pub struct Stock {
    pub id: Id<Stock>,
    pub name: String,
    pub created_at: DateTime<Local>,
    pub updated_at: DateTime<Local>,
}

#[derive(new, Debug)]
pub struct NewStock {
    pub id: Id<Stock>,
    pub name: String,
}
