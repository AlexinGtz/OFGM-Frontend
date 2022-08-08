import { isEmptyOrNull } from "./dateUtils"

export const validateTicketData = (name: string, mail: string, confirmMail: string) => {

  if(isEmptyOrNull(name)){
    return {
        success: false,
        error: "El nombre esta vacío"
    }
  }

  if(!Validator.isMailValid(mail)){
      return {
          success: false,
          error: "El correo no está en el formato correcto"
      };
  }

  if(mail !== confirmMail){
      return {
          success: false,
          error: "Los correos no coinciden"
      };
  }

  return {
      success: true
  };
}

class Validator {
    static isMailValid(mail: string) {
      return /\S+@\S+[.]\S+/i.test(mail);
    }
  
    static isPhoneValid(phone: string, digits: number) {
      return phone.length === digits;
    }
  
    static isIntAmountValid(amount: string) {
      return /\d/i.test(amount);
    }
  
    static isFloatAmountValid(amount: string) {
      return /\d+[.]\d+/i.test(amount);
    }
  
    static isDateValid(date: string, onlyFuture = false) {
      if (date !== "") {
        if (onlyFuture) {
          const chosenDate = new Date(date + "T00:00:00");
          if (chosenDate.getTime() >= Date.now()) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  
    static isHourValid(hour: string) {
      return hour !== "" ? true : false;
    }
  
    static isStringValid(string: string, length: number) {
      return string.length >= length ? true : false;
    }
  }
  