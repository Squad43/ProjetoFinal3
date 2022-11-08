package com.example.demo.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Cadastro;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long> {
    



}
