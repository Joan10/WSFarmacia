/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ltimwsfarmacia.util;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.servlet.ServletContext;
import javax.xml.ws.WebServiceContext;
import javax.xml.ws.handler.MessageContext;

/**
 *
 * @author miquel
 */
@WebService(serviceName = "WSUtils")
public class WSUtils {

    @Resource
    private WebServiceContext wsCtxt;

    /**
     * Web service operation
     */
    @WebMethod(operationName = "upload")
    public String upload(@WebParam(name = "name") String name, @WebParam(name = "content") String content) {
        FileOutputStream fos = null;
        String res = "";
        System.out.println(content);
        try {
            MessageContext msgCtxt = wsCtxt.getMessageContext();
            ServletContext servCtx
                    = (ServletContext) msgCtxt.get(MessageContext.SERVLET_CONTEXT);
            String up = servCtx.getRealPath("/");
            up = up + "files/images/";
            String fic = up + name;
            File f = new File(fic);
            boolean noexiste = f.createNewFile();
            if (noexiste) {  // hay que convertir el char array en bytes
                fos = new FileOutputStream(f);
                content = content.substring(content.indexOf("base64,")+7);
                byte[] data = Base64.decode(content);
                fos.write(data);
                fos.flush();
                res = "OK";
            } else {
                res = "ERROR";
            }
        } catch (Exception ex) {
            res = "ERROR";
            Logger.getLogger(WSUtils.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            try {
                fos.close();
            } catch (IOException ex) {
                res = "ERROR";
                Logger.getLogger(WSUtils.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return res;
    }

}
