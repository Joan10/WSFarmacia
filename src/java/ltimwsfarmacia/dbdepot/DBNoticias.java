/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ltimwsfarmacia.dbdepot;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import ltimwsfarmacia.data.Global;

/**
 *
 * @author miquel
 */
public class DBNoticias {

    public ArrayList<String> lista() {
        ArrayList<String> res = new ArrayList<>();
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from noticias;");
            while (rs.next()) {
                String aux = "";
                aux = aux + Integer.toString(rs.getInt("id"));
                aux = aux + Global.separator + rs.getString("texto");
                aux = aux + Global.separator + rs.getString("inicio");
                aux = aux + Global.separator + rs.getString("fin");
                res.add(aux);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public ArrayList<String> listaEnFecha(String f1) {
        ArrayList<String> res = new ArrayList<>();
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            String sql = "select * from noticias where (inicio <= '"
                    + f1 + "') and (fin >= '" + f1 + "');";
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()) {
                String aux = "";
                aux = aux + Integer.toString(rs.getInt("id"));
                aux = aux + Global.separator + rs.getString("texto");
                aux = aux + Global.separator + rs.getString("inicio");
                aux = aux + Global.separator + rs.getString("fin");
                res.add(aux);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String consulta(int id) {
        String res = "NOP";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery(
                    "select * from noticias where id='" + id + "';");
            if (rs.next()) {
                res = "";
                res = res + Integer.toString(rs.getInt("id")) + Global.separator;
                res = res + rs.getString("texto") + Global.separator;
                res = res + rs.getString("inicio") + Global.separator;
                res = res + rs.getString("fin");
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String alta(String texto, String inicio, String fin) {
        String res = "Error: Error creating register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            String sql = "INSERT INTO noticias (texto, inicio, fin) "
                    + "VALUES('" + texto + "', '" + inicio + "', '"
                    + fin + "');";
            st.executeUpdate(sql);
            res = "OK";
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String modificacion(int id, String texto, String inicio, String fin) {
        String res = "Error: Error updating register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery(
                    "select * from noticias where id='" + id + "';");
            if (rs.next()) {
                String sql = "UPDATE noticias SET "
                        + "id = '" + id + "', texto = '" + texto + "', "
                        + "inicio = '" + inicio + "', fin = '" + fin + "' "
                        + "WHERE id = '" + id + "';";
                st.executeUpdate(sql);
                res = "OK";
            } else {
                res = "Error: This id is not in the DB";
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }
}
