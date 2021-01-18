import {Query, Resolver} from "type-graphql";

@Resolver()
class PingResolver {
    @Query(() => String)
    ping(){
        return "Pong!"
    }
}


export default PingResolver;