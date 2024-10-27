import {SignInRequest} from "../model/user/auth/SignInRequest";
import {SignUpRequest} from "../model/user/auth/SignUpRequest";
import {BaseController} from "./BaseController";
import {AuthResponse} from "../model/user/auth/AuthResponse";

export class AuthController extends BaseController {
    async signUp(user: SignUpRequest) {
        return await this.api<AuthResponse>("sign-up", user, "POST")
    }

    async signIn(user: SignInRequest) {
        return await this.api<AuthResponse>("sign-in", user, "POST")
    }
}