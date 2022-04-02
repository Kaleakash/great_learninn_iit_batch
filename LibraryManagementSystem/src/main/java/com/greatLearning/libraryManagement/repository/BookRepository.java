package com.greatLearning.libraryManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.greatLearning.libraryManagement.entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer>{
	
	@Query("select book from Book book where book.name = :n and book.author =:a")
	public List<Book> searchBookByNameAndAuthor(@Param("n") String name, @Param("a") String author);
	
//	@Query("select book from Book book where book.name = 1?")
//	public List<Book> searchBookByName(String name);
//	
//	@Query("select book from Book book where book.author = 1?")
//	public List<Book> searchBookByAuthor(String author);
}
