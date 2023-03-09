package com.chang.admin.user;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

import com.chang.common.entity.Role;
import com.chang.common.entity.User;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class UserRepositoryTests {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private TestEntityManager entityManager;
	
	@Test
	public void testCreateUserWithOneRole() {
		Role roleAdmin = entityManager.find(Role.class, 1);
		User userAdmin = new User("admin@changshop.com", "admin123", "Trung", "Le Bao");
		userAdmin.addRole(roleAdmin);
		User saveUser = repo.save(userAdmin);
		assertThat(saveUser.getId()).isGreaterThan(0);
	}
	
	@Test
	public void testCreateUserWithTwoRole() {
		User userLee = new User("lee@changshop.com", "lee123", "Trung", "Le Bao");
		Role roleEditor = new Role(3);
		Role roleAssistant = new Role(5);
		userLee.addRole(roleEditor);
		userLee.addRole(roleAssistant);
		User saveUser = repo.save(userLee);
		assertThat(saveUser.getId()).isGreaterThan(0);
	}
	
	@Test
	public void testListAllUsers() {
		Iterable<User> listUsers = repo.findAll();
		listUsers.forEach(user -> System.out.println(user));
	}
	
	@Test
	public void testGetUserByID() {
		User userLee = repo.findById(2).get();
		System.out.println(userLee);
		assertThat(userLee).isNotNull();
	}
	
	@Test
	public void testUpdateUserDetails() {
		User userLee = repo.findById(2).get();
		userLee.setEnabled(true);
		repo.save(userLee);
	}
	
	@Test
	public void testUpdateUserRoles() {
		User userLee = repo.findById(2).get();
		Role roleEditor = new Role(3);
		Role roleSaleor = new Role(2);
		userLee.getRoles().remove(roleEditor);
		userLee.getRoles().add(roleSaleor);
		repo.save(userLee);
	}
	
	@Test
	public void testDeleteUsers() {
		Integer userId = 2;
		repo.deleteById(userId);		
	}
}
