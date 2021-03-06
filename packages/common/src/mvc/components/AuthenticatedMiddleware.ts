import {Unauthorized} from "ts-httpexceptions";
import {IMiddleware} from "../";
import {EndpointInfo, Req} from "../../filters";
import {Middleware} from "../decorators/class/middleware";

/**
 * This middleware manage the authentication based on passport strategy.
 * @private
 * @middleware
 */
@Middleware()
export class AuthenticatedMiddleware implements IMiddleware {
  public use(@Req() request: Req, @EndpointInfo() endpoint: EndpointInfo) {
    const options = endpoint.get(AuthenticatedMiddleware) || {};
    // @ts-ignore
    if (!request.isAuthenticated(options)) {
      throw new Unauthorized("Unauthorized");
    }
  }
}
