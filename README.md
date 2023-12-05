# MediaMingle

MediaMingle is a dynamic online platform designed to bring people together through shared interests and creative expression. Our platform offers a unique space where users can seamlessly connect, discover, and engage with a diverse array of multimedia content.


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your  key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Demo



## Deployment

To deploy this project run

```bash
  npm run build
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_RAPID_API_KEY`

`REACT_APP_CLIENTID` 

`REACT_APP_AUTH_DOMAIN`


## Documentation

[Documentation](https://linktodocumentation)


## Features


- User Authentication with Auth0
- Integrate a video player that supports features suchas play, pause, seek, volume
control, and full-screen mode.
o Include options for closedcaptions and quality settings.
- Implement a page or component where users can browse the entire catalogue of
available videos.
o Allow users tofilter content by genre, releasedate, and other relevant criteria
- Implement a search feature that allows users to find specific content by title, genre, or
actor.
o Provide searchsuggestions as users type

## Feedback

If you have any feedback, please reach out to us at sd769113@gmail.com


## Installation



```bash
- Clone the repositroy.
- Go to the project directory in the terminal & install the required dependencies by using:
- npm install
- npm start

Note - you will need to generate your own environment variables for Firebase . You can check the required variables in .env.example file.
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```



## Tech Stack

**Client:** React,,React router dom,Material UI,RapidApi


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

