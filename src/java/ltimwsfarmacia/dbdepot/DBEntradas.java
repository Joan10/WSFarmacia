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
public class DBEntradas {

    public ArrayList<String> lista() {
        ArrayList<String> res = new ArrayList<>();
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            ResultSet rs = st.executeQuery("select * from entradas;");
            while (rs.next()) {
                String aux = "";
                aux = aux + Integer.toString(rs.getInt("id"));
                aux = aux + Global.separator + Integer.toString(rs.getInt("idmedicamento"));
                aux = aux + Global.separator + Integer.toString(rs.getInt("cantidad"));
                aux = aux + Global.separator + rs.getString("fechahora");
                res.add(aux);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public ArrayList<String> listaEntreFechas(String f1, String f2) {
        ArrayList<String> res = new ArrayList<>();
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            String sql = "select * from entradas where (fechahora >= '"
                    + f1 + "') and (fechahora <= '" + f2 + "');";
            ResultSet rs = st.executeQuery(sql);
            while (rs.next()) {
                String aux = "";
                aux = aux + Integer.toString(rs.getInt("id"));
                aux = aux + Global.separator + Integer.toString(rs.getInt("idmedicamento"));
                aux = aux + Global.separator + Integer.toString(rs.getInt("cantidad"));
                aux = aux + Global.separator + rs.getString("fechahora");
                res.add(aux);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }

    public String alta(int idmedicamento, int cantidad, String fechahora) {
        String res = "Error: Error creating register";
        DBConnection db = new DBConnection();
        try {
            db.open();
            Statement st = db.getConection().createStatement();
            String sql = "INSERT INTO entradas (idmedicamento, cantidad, fechahora) "
                    + "VALUES('" + idmedicamento + "', '" + cantidad + "', '"
                    + fechahora + "');";
            st.executeUpdate(sql);
            res = "OK";
        } catch (SQLException ex) {
            ex.printStackTrace();
        } finally {
            db.close();
        }
        return res;
    }
}
