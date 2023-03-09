package com.chang.admin.user;

import org.springframework.data.repository.CrudRepository;

import com.chang.common.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
