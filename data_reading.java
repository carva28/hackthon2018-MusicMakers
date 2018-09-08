import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class MainApp extends Application{
    @Override
    public void start(Stage stage) throws Exeption {
        try{
            OSCPortIn receiver = new OCSPortIn(8888);
            OSCListener listener = new OSCListerner(){
                public void acceptMessage(java.util.Date time, OSCMessage message){
                    System.out.println("The message that was received is:");
                    System.out.println(message);
                }
            };
            receiver.addListener("/0/raw", listener);
            receiver.startListening();
        }catch(Exception error){
            System.out.println(error);
        }
    }
}