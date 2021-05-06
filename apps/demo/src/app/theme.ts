export abstract class Theme {

  colors: {
    primary: string,
    secondary: string,
  };

  buttons: {
    primary?: string;
    secondary?: string;
  };

}

export class DemoTheme implements Theme {

  colors = {
    primary: 'blue-500',
    secondary: 'green-500',
  };

  base = {
    button: 'text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-110',
  };

  buttons = {
    primary: `${this.base.button} bg-${this.colors.primary} hover:bg-blue-700`,
    secondary: `${this.base.button} bg-${this.colors.secondary} hover:bg-green-700`,
  };

}

export class DemoTheme2 implements Theme {

  colors = {
    primary: 'bg-gradient-to-r from-green-400 to-blue-500 hover:filter hover:saturate-150',
    secondary: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:filter hover:saturate-150',
  };

  base = {
    button: 'text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-out transform hover:-translate-y-1 hover:scale-110 relative hover:z-10',
  };

  buttons = {
    primary: `${this.base.button} ${this.colors.primary} hover:bg-blue-700`,
    secondary: `${this.base.button} ${this.colors.secondary} hover:bg-green-700`,
  };

}
