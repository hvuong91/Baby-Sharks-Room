--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: baby_sharks_room_schema; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA baby_sharks_room_schema;


ALTER SCHEMA baby_sharks_room_schema OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: baby_sharks_room_schema; Owner: postgres
--

CREATE TABLE baby_sharks_room_schema.users (
    id integer NOT NULL,
    username character varying(40) NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE baby_sharks_room_schema.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: baby_sharks_room_schema; Owner: postgres
--

CREATE SEQUENCE baby_sharks_room_schema.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE baby_sharks_room_schema.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: baby_sharks_room_schema; Owner: postgres
--

ALTER SEQUENCE baby_sharks_room_schema.users_id_seq OWNED BY baby_sharks_room_schema.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: baby_sharks_room_schema; Owner: postgres
--

ALTER TABLE ONLY baby_sharks_room_schema.users ALTER COLUMN id SET DEFAULT nextval('baby_sharks_room_schema.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: baby_sharks_room_schema; Owner: postgres
--

COPY baby_sharks_room_schema.users (id, username, password) FROM stdin;
1	user1	123
2	user2	456
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: baby_sharks_room_schema; Owner: postgres
--

SELECT pg_catalog.setval('baby_sharks_room_schema.users_id_seq', 2, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: baby_sharks_room_schema; Owner: postgres
--

ALTER TABLE ONLY baby_sharks_room_schema.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

