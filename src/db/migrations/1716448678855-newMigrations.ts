import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrations1716448678855 implements MigrationInterface {
    name = 'NewMigrations1716448678855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "variant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameLang" json NOT NULL DEFAULT '{}', "dataArea" character varying(255), "description" json NOT NULL DEFAULT '{}', "type" bit, "active" boolean, "createdBy" character varying(128) NOT NULL DEFAULT 'system', "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying(128) NOT NULL DEFAULT 'system', "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f8043a8a34fa021a727a4718470" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "variant_data" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameLang" json NOT NULL DEFAULT '{}', "dataArea" character varying(255), "shortDescription" json NOT NULL DEFAULT '{}', "type" bit, "active" boolean, "createdBy" character varying(128) NOT NULL DEFAULT 'system', "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "updatedBy" character varying(128) NOT NULL DEFAULT 'system', "updatedOn" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying(255) NOT NULL, "hex" character varying(255), "variant_id" uuid NOT NULL, "parent_variant_id" character varying(255), "longDescription" json NOT NULL DEFAULT '{}', "approvedBy" character varying(255) NOT NULL, "webImage" character varying(255), "mobileImage" character varying(255), CONSTRAINT "PK_d4b1e68cc8d137f4f34f93a6f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "username" character varying(15) NOT NULL, "email" character varying(40) NOT NULL, "age" integer NOT NULL, "password" character varying NOT NULL, "gender" "public"."user_gender_enum" NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sku" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nameLang" json NOT NULL DEFAULT '{}', "shortDescription" json DEFAULT '{}', "active" boolean, "createdBy" character varying(128) NOT NULL DEFAULT 'system', "createdOn" TIMESTAMP NOT NULL DEFAULT now(), "modifiedBy" character varying(128) NOT NULL DEFAULT 'system', "modifiedOn" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying, "productId" character varying, "variantsData" character varying, "longDescription" json NOT NULL DEFAULT '{}', "approvedBy" character varying, "webImage" character varying, "mobileImage" character varying, CONSTRAINT "PK_ed102ac07c2cbc14c9a1438ecc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "variant_data" ADD CONSTRAINT "FK_2022115c908d14f43f2e6e9fa39" FOREIGN KEY ("variant_id") REFERENCES "variant"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "variant_data" DROP CONSTRAINT "FK_2022115c908d14f43f2e6e9fa39"`);
        await queryRunner.query(`DROP TABLE "sku"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "variant_data"`);
        await queryRunner.query(`DROP TABLE "variant"`);
    }

}
