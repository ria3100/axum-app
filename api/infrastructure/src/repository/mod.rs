use std::marker::PhantomData;

use derive_new::new;

use crate::persistence::postgres::Db;

pub mod health_check;
pub mod stock;

#[derive(new)]
pub struct DatabaseRepositoryImpl<T> {
    pool: Db,
    _marker: PhantomData<T>,
}
