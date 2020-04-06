export default function(context){
  return {
    httpEndpoint: process.env.api + '/graphql',
    // getAuth:() => 'Bearer my-static-token' // use this method to overwrite functions
  }
}