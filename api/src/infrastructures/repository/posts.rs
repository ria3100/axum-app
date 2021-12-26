use crate::domains::posts::{Post, PostId, PostRepository};
use crate::infrastructures::db::schema::*;
use crate::infrastructures::repository::DBConnectRepositoryImpl;
use diesel;
use diesel::prelude::*;
use diesel::QueryDsl;
use failure::Error;

#[derive(Debug, Clone, Eq, PartialEq, Hash, Insertable)]
#[table_name = "posts"]
pub struct NewPostEntity {
  pub title: String,
  pub body: String,
}

impl NewPostEntity {
  fn from(model: &Post) -> NewPostEntity {
    NewPostEntity {
      title: model.title.to_owned(),
      body: model.body.to_owned(),
    }
  }
}

#[derive(Debug, Clone, Eq, PartialEq, Hash, Queryable, Identifiable, AsChangeset)]
#[table_name = "posts"]
pub struct PostEntity {
  pub id: i32,
  pub title: String,
  pub body: String,
  pub published: bool,
}

impl PostEntity {
  fn from(model: &Post) -> PostEntity {
    PostEntity {
      id: model.id.get(),
      title: model.title.to_owned(),
      body: model.body.to_owned(),
      published: model.published,
    }
  }

  fn of(&self) -> Post {
    Post {
      id: PostId::new(self.id),
      title: self.title.to_owned(),
      body: self.body.to_owned(),
      published: false,
    }
  }
}

impl PostRepository for DBConnectRepositoryImpl {
  fn find_by_id(&self, post_id: PostId) -> Result<Post, Error> {
    use super::super::db::schema::posts::dsl;

    let conn = self.pool.get()?;
    let entity: PostEntity = dsl::posts
      .filter(posts::id.eq(post_id.get()))
      .get_result(&conn)?;

    Ok(entity.of())
  }

  fn list(&self) -> Result<Vec<Post>, Error> {
    use super::super::db::schema::posts::dsl;

    let conn = self.pool.get()?;
    let query = dsl::posts.into_boxed();
    let results: Vec<PostEntity> = query.limit(100).load(&conn)?;

    Ok(results.into_iter().map(|e| e.of()).collect())
  }

  fn insert(&self, post: &Post) -> Result<(), Error> {
    use super::super::db::schema::posts::dsl;

    let conn = self.pool.get()?;
    let entity = NewPostEntity::from(post);
    diesel::insert_into(dsl::posts)
      .values(entity)
      .execute(&conn)?;

    Ok(())
  }

  fn update(&self, post: &Post) -> Result<(), Error> {
    let conn = self.pool.get()?;
    let entity = PostEntity::from(post);
    diesel::update(posts::table).set(&entity).execute(&conn)?;

    Ok(())
  }

  fn delete(&self, post: &Post) -> Result<(), Error> {
    let conn = self.pool.get()?;
    let entity = PostEntity::from(post);
    diesel::delete(&entity).execute(&conn)?;

    Ok(())
  }
}
