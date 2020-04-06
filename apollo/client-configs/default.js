export default function(context){
  return {
    httpEndpoint: process.env.API_URL + '/graphql',
    // getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}