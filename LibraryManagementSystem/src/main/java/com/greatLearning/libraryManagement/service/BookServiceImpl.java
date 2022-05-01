package com.greatLearning.libraryManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.greatLearning.libraryManagement.entity.Book;
import com.greatLearning.libraryManagement.repository.BookRepository;
@Service
public class BookServiceImpl implements BookService{

	@Autowired
	BookRepository bookRepository;
	
	@Override
	public List<Book> findAll() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();		// pre-defined method of JPA Repository 
	}
	@Override
	public Book findById(int theId) {
		// TODO Auto-generated method stub
		return bookRepository.findById(theId).get();
	}
	@Override
	public void save(Book theBook) {
		// TODO Auto-generated method stub
		bookRepository.saveAndFlush(theBook);
	}
	@Override
	public void deleteById(int theId) {
		// TODO Auto-generated method stub
		bookRepository.deleteById(theId);
	}
	@Override
	public List<Book> searchBy(String name, String author) {
		// TODO Auto-generated method stub
		return bookRepository.searchBookByNameAndAuthor(name, author);
	}
	@Override
	public void update(Book theBook) {
		bookRepository.save(theBook);
		
	}

	
}
