package com.ash.LoginSignUp.configuration;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CustomWebConfig implements WebMvcConfigurer{

	public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {

        PageableHandlerMethodArgumentResolver pageResolver = new PageableHandlerMethodArgumentResolver();

        pageResolver.setPageParameterName("page-number");
        pageResolver.setSizeParameterName("page-size");
        pageResolver.setOneIndexedParameters(true);

        Pageable defaultPageable = PageRequest.of(0, 5);
        pageResolver.setFallbackPageable(defaultPageable);

        argumentResolvers.add(pageResolver);
	}
}
