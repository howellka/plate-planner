PGDMP     +                    z           final_capstone    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    76175    final_capstone    DATABASE     r   CREATE DATABASE final_capstone WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE final_capstone;
                postgres    false            �            1259    76209    ingredients    TABLE     ~   CREATE TABLE public.ingredients (
    name character varying(255),
    type character varying(255),
    id bigint NOT NULL
);
    DROP TABLE public.ingredients;
       public         heap    postgres    false            �            1259    76214    ingredients_id_seq    SEQUENCE     {   CREATE SEQUENCE public.ingredients_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.ingredients_id_seq;
       public          postgres    false    213            
           0    0    ingredients_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.ingredients_id_seq OWNED BY public.ingredients.id;
          public          postgres    false    214            �            1259    76193    recipe_steps    TABLE     z   CREATE TABLE public.recipe_steps (
    recipeid integer NOT NULL,
    stepnum integer,
    step character varying(255)
);
     DROP TABLE public.recipe_steps;
       public         heap    postgres    false            �            1259    76188    recipes    TABLE     �   CREATE TABLE public.recipes (
    name character varying(255),
    num_of_steps integer,
    image character varying(255),
    notes character varying(255),
    id bigint NOT NULL
);
    DROP TABLE public.recipes;
       public         heap    postgres    false            �            1259    76224    recipes_id_seq    SEQUENCE     w   CREATE SEQUENCE public.recipes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.recipes_id_seq;
       public          postgres    false    211                       0    0    recipes_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;
          public          postgres    false    215            �            1259    76234    recipes_ingredients    TABLE     \   CREATE TABLE public.recipes_ingredients (
    recipeid integer,
    ingredientid integer
);
 '   DROP TABLE public.recipes_ingredients;
       public         heap    postgres    false            �            1259    76176    seq_user_id    SEQUENCE     t   CREATE SEQUENCE public.seq_user_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.seq_user_id;
       public          postgres    false            �            1259    76177    users    TABLE     �   CREATE TABLE public.users (
    user_id integer DEFAULT nextval('public.seq_user_id'::regclass) NOT NULL,
    username character varying(50) NOT NULL,
    password_hash character varying(200) NOT NULL,
    role character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false    209            p           2604    76215    ingredients id    DEFAULT     p   ALTER TABLE ONLY public.ingredients ALTER COLUMN id SET DEFAULT nextval('public.ingredients_id_seq'::regclass);
 =   ALTER TABLE public.ingredients ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            o           2604    76225 
   recipes id    DEFAULT     h   ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);
 9   ALTER TABLE public.recipes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    211            x           2606    76217    ingredients ingredients_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.ingredients DROP CONSTRAINT ingredients_pkey;
       public            postgres    false    213            r           2606    76182    users pk_user 
   CONSTRAINT     P   ALTER TABLE ONLY public.users
    ADD CONSTRAINT pk_user PRIMARY KEY (user_id);
 7   ALTER TABLE ONLY public.users DROP CONSTRAINT pk_user;
       public            postgres    false    210            v           2606    76197    recipe_steps recipe_steps_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.recipe_steps
    ADD CONSTRAINT recipe_steps_pkey PRIMARY KEY (recipeid);
 H   ALTER TABLE ONLY public.recipe_steps DROP CONSTRAINT recipe_steps_pkey;
       public            postgres    false    212            t           2606    76227    recipes recipes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_pkey;
       public            postgres    false    211           