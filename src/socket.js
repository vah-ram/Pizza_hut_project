import { host } from "./utils/Hosts";
import io from "socket.io-client";

export const socket = io.connect(host);