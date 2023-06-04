import { ILoginRequest, ILoginResponse } from "../types/auth.types";
import { post } from "./Common";

const path = "/auth";

export async function login(body: ILoginRequest): Promise<ILoginResponse> {
	return await post(`${path}/login`, body);
}
