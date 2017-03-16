<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Jdokumen_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
    }
	
	function daftar_jdokumen($filter,$limit,$start){
        
        $this->db->select('*');
        $this->db->from('tr_jenis_dokumen');
        $this->db->where('deleted_on',null);

        $total = $this->db->count_all_results(); 

        $this->db->select('*');
        $this->db->from('tr_jenis_dokumen a');
        $this->db->limit($limit, $start);
        $this->db->where('deleted_on',null);

        $this->db->order_by("id", "asc");
        $query = $this->db->get();

        return array('data'=>$query->result(),'total'=>$total);
    }

    function simpan($data){
        $this->db->insert('tr_jenis_dokumen', $data); 
        $respon['success'] = true;
        return $respon;
    }

    function update($data){
        $this->db->where('id', $data['id']);
        $this->db->update('tr_jenis_dokumen', $data); 
        $respon['success'] = true;
        return $respon;
    }
}