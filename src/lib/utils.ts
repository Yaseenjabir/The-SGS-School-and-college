import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const phoneNumber = "0946-792-151";

export const emailAddress = "swatsgs@gmail.com";

export const since = "2006";

export const schoolName = "The SGS College";

export const schoolMoto = "The Leading Group Of Schools And Colleges";

export const location = "Sambat Cham, Matta Swat, Pakistan";

export const redirectToWhatsapp = "+923331677444";
