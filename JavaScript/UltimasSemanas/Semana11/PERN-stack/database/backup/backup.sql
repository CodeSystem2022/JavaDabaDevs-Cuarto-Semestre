PGDMP         	        	    
    {            PERN    13.11 (Debian 13.11-0+deb11u1)    13.11 (Debian 13.11-0+deb11u1)     H           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            I           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            J           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            K           1262    32845    PERN    DATABASE     [   CREATE DATABASE "PERN" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'es_AR.UTF-8';
    DROP DATABASE "PERN";
                postgres    false            �            1259    32848    tareas    TABLE     �   CREATE TABLE public.tareas (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    descripcion text,
    usuario_id integer
);
    DROP TABLE public.tareas;
       public         heap    postgres    false            �            1259    32846    tareas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tareas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.tareas_id_seq;
       public          postgres    false    201            L           0    0    tareas_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.tareas_id_seq OWNED BY public.tareas.id;
          public          postgres    false    200            �            1259    32861    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    fecha_registro timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    gravatar character varying(255)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    32859    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public          postgres    false    203            M           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public          postgres    false    202            �           2604    32851 	   tareas id    DEFAULT     f   ALTER TABLE ONLY public.tareas ALTER COLUMN id SET DEFAULT nextval('public.tareas_id_seq'::regclass);
 8   ALTER TABLE public.tareas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    200    201    201            �           2604    32864    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            C          0    32848    tareas 
   TABLE DATA           E   COPY public.tareas (id, titulo, descripcion, usuario_id) FROM stdin;
    public          postgres    false    201   �       E          0    32861    usuarios 
   TABLE DATA           l   COPY public.usuarios (id, name, email, password, fecha_registro, fecha_actualizacion, gravatar) FROM stdin;
    public          postgres    false    203   �       N           0    0    tareas_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.tareas_id_seq', 19, true);
          public          postgres    false    200            O           0    0    usuarios_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.usuarios_id_seq', 19, true);
          public          postgres    false    202            �           2606    32856    tareas tareas_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.tareas
    ADD CONSTRAINT tareas_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.tareas DROP CONSTRAINT tareas_pkey;
       public            postgres    false    201            �           2606    32858    tareas tareas_titulo_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.tareas
    ADD CONSTRAINT tareas_titulo_key UNIQUE (titulo);
 B   ALTER TABLE ONLY public.tareas DROP CONSTRAINT tareas_titulo_key;
       public            postgres    false    201            �           2606    32873    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public            postgres    false    203            �           2606    32871    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            postgres    false    203            �           2606    32950    tareas tareas_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tareas
    ADD CONSTRAINT tareas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);
 G   ALTER TABLE ONLY public.tareas DROP CONSTRAINT tareas_usuario_id_fkey;
       public          postgres    false    3006    201    203            C   �   x�m���  ��L�@R�u�L�ATMR�t����!��/�C������%�8�CN��^�܄��lI�R���R����S����m�^|��f�z�-�q)�E�ߺ�ˍ�P�����+Iu^|�va[��F��#������rV+7��:D|&�b}      E   �  x�}�Ir�H��p�^ԶD��f�e��f������%!́�"}��quT"��T�[�������a�^����v�8��@�?z)~Oyk����3o��ش��D��]Lj���Ҳ����Y�O`�^�B��� �#Q�ȓ@(ʤ_�*�ڠ_����v�����E|�J=��ީs�Og>k�#�����f��.̤�n�Ĭ�ǰ�I�q������L��#��W0x7��A������c����h�i.z�9���i���X����q�"���2�%MI�Vۼ��J������g�2c8p
c���4�F ��"�*� }]wC��E��`��;�x��w�癷��ƒ3���}|�&�t��L{~��x-b�ȣR2~K�M*ÐܺP;�0�Q�6��i��
A���}�8�(�K����"[KG'O|����_I���,�����#�~<��:�c��*�	�g� ���X�2���I@���1�1�J9b��Nj����
ae�������4g�t�Ot�_��nO�w�c�P�α=��#=��S�ϓ�b� ��q�ѽ]=QL�eR)	7�8$T�bP) -�
a�U�j�w{��H���`�ag��Wzb^���s�?t[2yϼ8���o�6^�Ѹx��.�A�����
*�1@�c%BB�1@�����D🹂�a�z�����V����n���s�H�۠��ٳ~kF<k^l�6���M>n�"T�E����}�J{4SZ�$b�)�0�BZ�űUH� f�ƿa�L�<Ξ[ۋ�� )Z����n�0/�-5:_vh}���p��w�����Q&��PJI�-( �FQ",�0�!9V��O����d%\tp�6x6�\w�`�e��{��,�kO������^u���7��KhP�s0��x}��H��H.G!t����(�V�K��Ůi���#��ڲ}.T6Ngn����$Gs�mv��r���!���ߝ.5��u<F>��L*ݿ�E�)����!��	-� �"R��{�!�c��ϒhw�Y1��M�r؟�~m�t�\�i�q�^��|r��*�	� C�߲|�J;_,)Y�)�trm 6D��P9U����1�#��Տ��-;W�az.k���o/H����y�lo= �j~	����FQSO�)/��0�!6�
���NP�-�1�Vy�j�?V���     