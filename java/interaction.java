import javax.swing.*;

public class JSHelloWorld extends JApplet {
    JTextArea txt = new JTextArea(100,100);
    public JSHelloWorld() {
        txt.setText("Hello World");
        getContentPane().add(txt);
    }
}
