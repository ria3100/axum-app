/* eslint-disable */
export type User = {
  uid: string
  screen_name: string
  name: string
  belongs: string
  job: string
  bio: string
  icon_image_url: string
  cover_image_url: string
  twitter_username: string
  github_username: string
  website_url: string
  created_at: string
  updated_at: string
}

export type NewUser = {
  uid: string
  screen_name: string
  name: string
  icon_image_url: string
}

export type ChangeUser = {
  screen_name: string
  name: string
  belongs: string
  job: string
  bio: string
  icon_image_url: string
  cover_image_url: string
  twitter_username: string
  github_username: string
  website_url: string
}

export type UploadImage = {
  file_name: string
}
