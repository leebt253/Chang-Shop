package com.chang.admin.user;

import org.springframework.data.repository.CrudRepository;

import com.chang.common.entity.Role;

public interface RoleRepository extends CrudRepository<Role, Integer> {
	
}
