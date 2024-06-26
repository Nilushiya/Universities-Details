package com.uni.info.repository;

import com.uni.info.entity.Department;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepo extends JpaRepository<Department , Long> {
//    @Modifying
//    @Transactional
//    @Query("update Department d set d.departmentName = :departmentName where d.dep_id = :dep_id")
//    void update(@Param("dep_id") Long dep_id, @Param("departmentName") String departmentName,@Param(("")));

    @Query("select d from Department d where d.f_id = :f_id")
    List<Department> groupDep(@Param("f_id") Long f_id);
    @Modifying
    @Transactional
    @Query("update Department d set d.departmentName = :departmentName , d.f_id = :f_id where d.dep_id = :dep_id")
    void update(@Param("dep_id") Long dep_id,@Param("departmentName") String departmentName,@Param("f_id") Long f_id);
    @Query("select f,u,d from Faculty f join University u on f.uId = u.uni_id join Department d on d.f_id = f.fac_id")
    List<Object[]> findAllDetails();
    @Query("select d from Department d where d.f_id = :fId and d.departmentName = :departmentName")
    Department findExistdep(@Param("departmentName") String departmentName,@Param("fId") Long fId);
    @Query("select f,d from Faculty f join Department d on d.f_id = f.fac_id where d.f_id = :fId")
    List<Object[]> isFacId(@Param("fId") Long fId);
}
