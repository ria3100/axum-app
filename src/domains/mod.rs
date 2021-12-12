use std::marker::PhantomData;

pub mod posts;

#[derive(Copy, Clone, Debug, Hash, PartialEq, Eq, Ord, PartialOrd)]
pub struct Id<T> {
    id: i32,
    _phantom: PhantomData<T>,
}

impl<T> Id<T> {
    pub fn new(id: i32) -> Self {
        Self {
            id,
            _phantom: PhantomData,
        }
    }

    pub fn get(&self) -> i32 {
        self.id
    }
}

impl<T> Default for Id<T> {
    fn default() -> Self {
        Id::new(0)
    }
}
