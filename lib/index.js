import Dialog from "./Dialog";
import Button from "./Button";
import Menu from './Menu';

window.Dialog = Dialog;
window.Button =  Button;
window.Menu = Menu;

if (typeof window !== "undefined") {
  console.warn("runtime must be window.");
}
